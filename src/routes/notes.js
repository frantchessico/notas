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
     req.flash('success_msg', 'A sua nota foi salva com sucesso.');
     req.flash('error_msg', 'Algo deu errado.')
        res.redirect('/notes');
    }
});
 
router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({date: 'desc'})
    res.render('notes/notes', { notes })

});

router.get('/notes/edit/:id', async (req, res) => {
const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', {note}) 
});  

router.put('/notes/update/:id', async (req, res) => {
const { title, description } = req.body;
await Note.findByIdAndUpdate(req.params.id, { title, description});
req.flash('success_msg', 'A sua nota foi atualizada com sucesso.');
req.flash('error_msg', 'Algo deu errado.')
res.redirect('/notes')
});

router.delete('/notes/delete/:id', async (req, res) => {
   await Note.findByIdAndDelete(req.params.id);
   req.flash('success_msg', 'A sua nota foi deletada com sucesso')

   res.redirect('/notes');
})


module.exports = router;

