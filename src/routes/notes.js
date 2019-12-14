const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note')
});


router.post('/notes/add', async (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if(!title) {
        errors.push({text: 'Por favor, o campo Titulo é obrigatório'})
    }

    if(!description) {
        errors.push({text: 'Por favor, o campo Descrição é obrigatório'})
    }

    if(errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });

        return false;
    }

    else { 
        const NewNote  = new Note({ title, description });
     await NewNote.save();
        res.redirect('/notes');
    }
});
 
router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({date: 'desc'})
    res.render('notes/notes', { notes })
    console.log(datas)
});


module.exports = router;

