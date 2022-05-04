class loginPOM {
    launchURL () {
        cy.visit('https://marketplace.staging.myautochek.com/ng')
    }

    loginBtn (){
        cy.get('.mr-20').click()
    }

    enterEmail (){
        return cy.get('.form-content > :nth-child(1) > div > .input')
        //.clear()
        //.type('email@gmail.com');
        
    }


    enterPassword (pswd){
        cy.get(':nth-child(2) > div > .input')
       // .clear()
        .type('');
        return this
    }

    submit(){
        cy.get('.button').click()
    }
}
export default loginPOM