import {
    ADD_REVIEW,
    ADD_NAME,
    ADD_COMMENT,
}  from "../actionTypes"

const  exampleReviews= [
        {
            name:'самуил',
            date:'13 октября 2011',
            comment:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
            id:1
        },
        {
            name:'лилия семёнова',
            date:'14 октября 2011',
            comment:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
            id:2
        },
        {
            name:'лилия семёнова',
            date:'14 октября 2011',
            comment:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
            id:3
        }
    ];

const defaultState = {
    reviews: exampleReviews,
    name:'',
    comment:''
};

export const mainReducer = (state = defaultState, action) => {
    switch(action.type){

        case ADD_REVIEW : {
            const date = new Date();
            const formattedDate = date.toLocaleDateString('ru-RU', {
                day: 'numeric', month: 'long', year: 'numeric'
            });
            const newReview = {
                name:state.name ? state.name : 'Incognito',
                date:formattedDate.slice(0,formattedDate.length-2),
                comment:state.comment,
                id:state.reviews[state.reviews.length-1].id +1
            };
            return {
                ...state,
                reviews: [...state.reviews,newReview],
                comment:'',
            };
        }

        case ADD_NAME : {
            return {
                ...state,
                name: action.payload,
            };
        }

        case ADD_COMMENT : {
            return {
                ...state,
                comment: action.payload,
            };
        }

        default:
            return state
    }
};