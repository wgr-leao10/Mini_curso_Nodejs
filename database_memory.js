import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #videos = new Map()

    list(search){
        return Array.from(this.#videos.entries())
        .map((videoArray) =>{
            
        const id = videoArray[0]
        const  data = videoArray[1]

        return{
            id,
            ...data,
        }

        })
        .filter(video => {
            if (search){
                return video.title.includes(search)
            }

            return true

        })
    }

    create(videos){
        const videosid = randomUUID()
        

        this.#videos.set(videosid, videos)
    }

    update(id, videos){
        this.#videos.set(id, videos)
    }

    delete(id){
        this.#videos.delete(id)
    }
}