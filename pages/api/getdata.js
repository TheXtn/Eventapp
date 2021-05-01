import db from '../../utils/'

export default async (req, res) => {
    const entries = await db.collection('events').get();
    const entriesData = entries.docs.map(entry => entry.data());

    res.status(200).json(entriesData)

}