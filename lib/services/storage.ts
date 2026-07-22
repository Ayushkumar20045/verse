import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "@/lib/firebase";

export async function uploadProfileImage(
  uid: string,
  file: File
): Promise<string> {
  const fileExtension =
    file.name.split(".").pop() ?? "jpg";

  const imageRef = ref(
    storage,
    `profile-images/${uid}.${fileExtension}`
  );

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);
}