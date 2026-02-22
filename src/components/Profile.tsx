import Link from "next/link";
import Image from "next/image";
import data from "@/data/user.json";

export function Profile() {
    const { profile, theme } = data;
    const userImage = profile.profileImage || "/default-image.jpg";

    return (
        <div>
            <Link
            href={`/${profile.username.replace('@', '')}`}
            className="flex flex-col items-center group mb-10 text-center">
                <div 
                className="relative w-28 h-28 rounded-full overflow-hidden border-4 shadow-xl mb-4 group-hover:scale-105 transition-transform"
                style={{ borderColor: theme.cardBackground }}>
                    <Image 
                    src={userImage} 
                    alt={profile.name} 
                    fill 
                    className="object-cover" 
                    priority
                    sizes="112px"/>
                </div>
            
                <h1 className="text-3xl font-black group-hover:opacity-80 transition-opacity">
                    {profile.nickname}
                </h1>
                
                <p className="font-medium opacity-60 text-lg">{profile.username}</p>
            </Link>
        </div>
    );
}