export const VIDEOS =[
    {name:"react", favorite: false },
    {name:"next", favorite: true},
];

export async function getAllVideos(){
    const promise = new Promise(res=>{
        setTimeout(()=> res(VIDEOS), 1500)
    });
    return await promise;
}


export async function getVideoByName(name){
    const promise = new Promise(res=>{
        setTimeout(()=> res(VIDEOS.find(x=>x.name === name)), 1500)
    });
    return await promise;
}