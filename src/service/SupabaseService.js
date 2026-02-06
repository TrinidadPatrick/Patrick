import { supabase } from "../supabase";

export const listAllFiles = async (bucket, path = "") => {
  const { data, error } = await supabase.rpc('get_all_files_in_bucket', { bucket_name: 'portfolio_images' });
  if (error) {
    console.error("Error listing files:", error);
    return [];
  }
  return data;
};