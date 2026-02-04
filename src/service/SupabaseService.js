import { supabase } from "../supabase";

export const listAllFiles = async (bucket, path = "") => {
  const { data, error } = await supabase.rpc('get_all_files_in_bucket', { bucket_name: 'portfolio_images' });
  if (error) {
    console.error("Error listing files:", error);
    return [];
  }

  // let files = [];

  // for (const item of data) {
  //   const fullPath = path ? `${path}/${item.name}` : item.name;
  //   if (item.id === null) {
  //     const subFiles = await listAllFiles(bucket, fullPath);
  //     files = files.concat(subFiles);
  //   } else {
  //       files.push({name: path, path: fullPath});
  //   }
  // }
  return data;
};