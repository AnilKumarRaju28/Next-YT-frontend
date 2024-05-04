import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "$1 vs $1,000,000 Hotel Room!",
    image: "YT.jpg",
    thumbImage: "MrBeast.jpg",
    author: "MrBeast",
    views: "344M",
    timestamp: "1 year ago"
}, {
    title: "Phone repairs are getting ridiculous - Here's why.",
    image: "MrBoss.png",
    thumbImage: "MrWhosethumb.jpg",
    author: "MrWhosetheboss",
    views: "200K",
    timestamp: "2 hours ago"
}, {
    title: "Fastest way to become a Web Developer in 2024",
    image: "SahilYT.png",
    thumbImage: "Sahilthumb.jpg",
    author: "Sahil & Sara",
    views: "410K",
    timestamp: "3 months ago"
}, {
    title: "Dude Perfect + Star Wars",
    image: "DudeYT.png",
    thumbImage: "DPThumb.jpg",
    author: "Dude Perfect",
    views: "15M",
    timestamp: "5 months ago"
}, {
    title: "Doctors React To Bollywood Medical Scenes",
    image: "DrMikeYT.png",
    thumbImage: "DrMikeThumb.jpg",
    author: "Doctor Mike",
    views: "1.4M",
    timestamp: "8 months ago"
}, {
    title: "10 Minutes To Escape Or This Room Explodes!",
    image: "BeastYT.png",
    thumbImage: "MrBeast.jpg",
    author: "MrBeast",
    views: "60M",
    timestamp: "6 days ago"
}, {
    title: "50 Cent - In Da Club (Official Music Video)",
    image: "50centYT.png",
    thumbImage: "50Thumb.jpg",
    author: "50 Cent",
    views: "2B",
    timestamp: "14 years ago"
},{
    title: "Salaar Telugu Trailer | Prabhas | Prashanth Neel | Prithviraj",
    image: "SalaarYT.png",
    thumbImage: "Hombale.jpg",
    author: "Hombale Films",
    views: "51M",
    timestamp: "5 months ago"
}, ]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=> <div>
            <VideoCard 
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}>
            </VideoCard>
        </div>)}
    </div>
} 