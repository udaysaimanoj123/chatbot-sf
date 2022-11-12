const rac_btn= document.querySelector('.rac')
const rac_options1= document.querySelector('.rac_options')

const ed_btn= document.querySelector('.Ed')
const ed_options1= document.querySelector('.Ed_options')

const btn_rac_1= document.querySelector('.rac_op1')
const rac_optionb1= document.querySelector('.rac_option_b1')

const btn_rac_2= document.querySelector('.rac_op2')
const rac_optionb2= document.querySelector('.rac_option_b2')

const ca_btn= document.querySelector('.ca')
const ca_options1= document.querySelector('.ca_options')

const ca_st= document.querySelector('.ca_op1')
const ca_st_options= document.querySelector('.ca_safteytips')

const ca_st1= document.querySelector('.ca_op2')
const ca_st_options1= document.querySelector('.ca_msgmove')

const st_btn_1= document.querySelector('.st_op3')
const tips_1= document.querySelector('.tips1')

const st_btn_2= document.querySelector('.st_op4')
const tips_2= document.querySelector('.tips2')

const st_btn_3= document.querySelector('.st_op5')
const tips_3= document.querySelector('.tips3')

const st_btn_4= document.querySelector('.st_op6')
const tips_4= document.querySelector('.tips4')




// const ed_send_btn= document.querySelector('.Ed_op1')
// const ed_sender= document.querySelector('.Ed_options_send')




class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            // sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        // sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        // node.addEventListener("keyup", ({key}) => {
        //     if (key === "Enter") {
        //         this.onSendButton(chatBox)
        //     }
        // })
    }


    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    // onSendButton(chatbox) {
    //     // var textField = chatbox.querySelector('input');
    //     // let text1 = textField.value
    //     if (text1 === "") {
    //         return;
    //     }

    //     let msg1 = { name: "User", message: text1 }
    //     this.messages.push(msg1);

    //     fetch('http://127.0.0.1:5000/predict', {
    //         method: 'POST',
    //         body: JSON.stringify({ message: text1 }),
    //         mode: 'cors',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //       })
    //       .then(r => r.json())
    //       .then(r => {
    //         let msg2 = { name: "Sam", message: r.answer };
    //         this.messages.push(msg2);
    //         this.updateChatText(chatbox)
    //         textField.value = ''

    //     }).catch((error) => {
    //         console.error('Error:', error);
    //         this.updateChatText(chatbox)
    //         textField.value = ''
    //       });
    // }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam")
            {
                html += '<div class="messages_item messages_item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages_item messages_item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();

rac_btn.addEventListener('click', function(){
    rac_options1.classList.toggle('rac_options--active')
})

st_btn_1.addEventListener('click', function(){
    tips_1.classList.toggle('tips1--active')
})
st_btn_2.addEventListener('click', function(){
    tips_2.classList.toggle('tips2--active')
})

st_btn_3.addEventListener('click', function(){
    tips_3.classList.toggle('tips3--active')
})
st_btn_4.addEventListener('click', function(){
    tips_4.classList.toggle('tips4--active')
})

ca_btn.addEventListener('click', function(){
    ca_options1.classList.toggle('ca_options--active')
})


ca_st.addEventListener('click', function(){
    ca_st_options.classList.toggle('ca_safteytips--active')
})

ca_st1.addEventListener('click', function(){
    const crimes_section = document.getElementById('Crimes');
    crimes_section.scrollIntoView();
})

btn_rac_1.addEventListener('click', function(){
    rac_optionb1.classList.toggle('rac_option_b1--active')
})


btn_rac_2.addEventListener('click', function(){
    rac_optionb2.classList.toggle('rac_option_b2--active')
    
})


// Emergency
ed_btn.addEventListener('click', function(){
    ed_options1.classList.toggle('ed_options--active')
})



// send the location
// ed_send_btn.addEventListener('click', function(){
//     ed_sender.classList.toggle('ed_options--active')


// })

