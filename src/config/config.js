const config ={
    appwriteURL:String(import.meta.ene.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.ene.VITE_APPWRITE_PROJECTID),
    appwriteDatabaseID:String(import.meta.ene.VITE_APPWRITE_DATABASEID),
    appwriteCollectionID:String(import.meta.ene.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID:String(import.meta.ene.VITE_APPWRITE_BUCKET_ID),
}

export default config;