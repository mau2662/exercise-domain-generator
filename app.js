let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];

pronoun.forEach(element_pronoun => {
    adj.forEach(element_adj => {
        noun.forEach(element_noun => {
            extension.forEach(element_extension => {
                let dominio = element_pronoun + element_adj + element_noun + element_extension;
                console.log(dominio);
            });
        });
    });
});