import db from '../../../utils'
export default async(req,res)=>{
    const eventId=req.query.id;
    if (req.method==='POST'){
        const {email,name,text}=req.body
        if (!email || !name || !text){
            res.status(404).json({
                message:'Invalid data'

            })
            return
        }
        console.log(email,name,text)
        db.collection('Comments').doc(eventId).collection('Comments').add({
            email:email,
            name:name,
            text:text,
            date:Date().toLocaleString()
        })
        res.status(200).json({
            message:'Comment added !'
        })

    }
    if (req.method==='GET'){
        const entries = await db.collection('Comments').doc(eventId).collection('Comments').orderBy('date','desc').get();
    const entriesData = entries.docs.map(entry => entry.data());

    res.status(200).json(entriesData)
    }
}
