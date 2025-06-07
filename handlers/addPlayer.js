import { gameState } from "../gameState/index.js"

export const addPlayerHandler = (request, response) => {

    console.log("request body", request.body)

    if (!request.body.name) {
        response.status(400).send({
            "Message":
                "The name is required"
        })
        return
    }
    gameState.players.push({
        name : request.body.name,
        points : 0,
    })
    response.status(201).send(gameState.players)

}