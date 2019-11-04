import React from 'react';
import {connect} from 'react-redux';
import {
    addReview,
    addName,
    addComment
} from './actions/main'
import './App.css';

class App extends React.Component {

    componentDidMount() {
        while (true) {
            var name = prompt('Введите ваше имя(только русские буквы)');
            if (/^[а-яё]+ [а-яё]+$/i.test(name) || /^[а-яё]+$/i.test(name) || !name) break;
            alert('Можно ввести имя и фамилию. Доступны только русские буквы.')
        }
        this.props.addName(name)
    }

    changeComment = (e) => {
        this.props.addComment(e.target.value)
    };

    addNeWReview = () => {
        if (this.props.comment.length > 0) {
            this.props.addReview()
        } else alert('Comment cant be empty')
    };

    enterPressed = (e) => {
        if ((e.ctrlKey) && ((e.keyCode === 0xA) || (e.keyCode === 0xD))) {
            this.addNeWReview();
        }
    };


    render() {
        const {reviews, comment} = this.props;
        const lastThree = reviews.slice(reviews.length - 3, reviews.length);
        return (
            <div className='main'>
                <div className='header'>
                    {/*<div className='header__img'></div>*/}
                    <img className='header__img' src={'/img/avatar.png'} alt="Oops"/>
                    <div className='header__info-block'>
                        <div className='header__info-block__name-block'>
                            <h3>Вероника Ростова</h3>
                            <small>Менеджер по продажам</small>
                        </div>
                        <div className='header__info-block__promo-block'>
                            <p>Подберу для вас самые лучшие предложения.</p>
                            <p>Мои услуги абсолютно бесплатны</p>
                        </div>
                    </div>
                </div>

                <div className='services' >
                    <p>Услуг</p>
                </div>
                <div className='service-block'>
                    <div className='service-block__info'>
                        <p className='service-block__info__text'><span>Ручное бронирование</span></p>
                        <p className='service-block__info__text'><span>Пакетные туры</span></p>
                        <p className='service-block__info__text'><span>Отели</span></p>
                    </div>
                    <div className='service-block__numbers'>
                        <p>11</p>
                        <p>3</p>
                        <p>1</p>
                    </div>
                </div>
                <div className='total'>
                    <h3>Всего</h3>
                    <h3>15</h3>
                </div>

                <div className='reviews'>
                    <div className='reviews__more-info'>
                        <h3>Последние отзывы</h3>
                        <a href="/">Все отзывы</a>
                    </div>
                    <div className='reviews__like-block'>
                        <div className='reviews__like-block__container'>
                            <div className='heart'></div>
                            <p>131</p>
                        </div>
                        <div className='reviews__like-block__container'>
                            <div className='bubble'></div>
                            <p>14</p>
                        </div>
                    </div>
                </div>
                {lastThree.map(el =>
                    <div className='comment-block' key={el.id}>
                        <div className='comment-block__user-info'>
                            <h4 className='comment-block__user-info__name'>{el.name}</h4>
                            <small>{el.date}</small>
                        </div>
                        <p className='speech-bubble'>{el.comment}</p>
                    </div>
                )}


                <div className='footer'>
                    <textarea className='footer__comment-textarea' value={comment} onKeyDown={this.enterPressed}
                              onChange={this.changeComment}/>
                    <button className='footer__add-comment-button' onClick={this.addNeWReview}>Написать консультанту
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.main.reviews,
        name: state.main.name,
        comment: state.main.comment
    }
};

const mapDispatchToProps = {
    addReview,
    addName,
    addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
