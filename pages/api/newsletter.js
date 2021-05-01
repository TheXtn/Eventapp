import db from '../../utils/'
function handler(req,res){
    if (req.method==='POST'){
        const userEmail=req.body.email
        if (!userEmail){
            res.status(422).json({message:'invalid email adress'})
            return
        }
        db.collection('emails').add({
            'email':userEmail
        })
        res.status(201).json({
            message:'Done'
        })
    }
    else {
        res.status(300).json({
            message:'Method not allowed'
        })
    }
}
export default handler