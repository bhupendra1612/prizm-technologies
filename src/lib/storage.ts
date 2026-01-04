// Supabase Storage bucket name
const BUCKET_NAME = "videos";

// Direct Supabase URL for public storage access
const SUPABASE_URL = "https://awnwmehxjyaczwxuptmg.supabase.co";

/**
 * Get public URL for a video stored in Supabase Storage
 * @param path - Path to the video in the bucket (e.g., "portfolio/project-1.mp4")
 * @returns Public URL string
 */
export function getVideoUrl(path: string): string {
    // Direct URL construction for public bucket access
    return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${path}`;
}

/**
 * Get public URL for portfolio video
 * @param filename - Video filename (e.g., "project-1.mp4")
 */
export function getPortfolioVideoUrl(filename: string): string {
    return getVideoUrl(`portfolio/${filename}`);
}

/**
 * Get public URL for testimonial video
 * @param filename - Video filename (e.g., "testimonial-1.mp4")
 */
export function getTestimonialVideoUrl(filename: string): string {
    return getVideoUrl(`testimonials/${filename}`);
}

/**
 * Upload a video to Supabase Storage
 * @param file - File to upload
 * @param folder - Folder name ("portfolio" or "testimonials")
 * @param filename - Desired filename
 */
export async function uploadVideo(
    file: File,
    folder: "portfolio" | "testimonials",
    filename: string
): Promise<{ url: string | null; error: string | null }> {
    // Dynamic import to avoid initialization issues
    const { supabase } = await import("./supabase");
    const path = `${folder}/${filename}`;

    const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(path, file, {
            cacheControl: "3600",
            upsert: true,
        });

    if (error) {
        return { url: null, error: error.message };
    }

    return { url: getVideoUrl(path), error: null };
}

/**
 * Delete a video from Supabase Storage
 * @param path - Full path to the video
 */
export async function deleteVideo(path: string): Promise<boolean> {
    // Dynamic import to avoid initialization issues
    const { supabase } = await import("./supabase");
    const { error } = await supabase.storage.from(BUCKET_NAME).remove([path]);
    return !error;
}
