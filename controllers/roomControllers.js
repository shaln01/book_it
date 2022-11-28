import Room from '../models.room'


const allRooms =async (req, res) =>{
    // res.status(200).json({
    //     sucess:true,
    //     message: 'All Rooms'
    // })
try {
    const rooms  =await Room.find();

        res.status(200).json({
            sucess:true,
            rooms
        })
}
catch(error) {
    res.statsus(400).json({
        sicess: false,
        error: error.message
    })
}
   
}


// Create new room    =>   api/rooms
const newRoom = async (req, res) => {

    try{
       const room = await  Room.create(req.body)

    res.status(200).json({
        sucess: true,
        room
    }) 
    } catch (error) {
        res.status(400).json({
            sucess: false,
            error: error.message
        })
    }
    
}


export {
    allRooms,
    newRoom
}