import './Home.scss';
import React from 'react';
import PropTypes from 'prop-types';
import SamedPicture from '../images/pngs/SamedPicture.png';
import OrhunPicture from '../images/pngs/OrhunPicture.png';
import IsmailPicture from '../images/pngs/IsmailPicture.png';

const TeamCard = ({ teamMember }) => {
    return (
        <div class="personal_card">
            <img src={teamMember.img} alt="" className="PersonImg" />
            <h1 className="name">{teamMember.name}</h1>
            <h2 className="what_do">{teamMember.whatDo}</h2>
            <p className="personal_detail">{teamMember.personalDetail}</p>
        </div>
    );
};

TeamCard.propTypes = {
    teamMember: PropTypes.array,
};

export const Home = () => {
    const teamMember = [
        {
            img: IsmailPicture,
            name: 'İsmail Coşkun',
            whatDo: 'Full Stack Developer',
            personalDetail:
                'Currently working at OBSS and living in Kocaeli. Final year CS student.',
        },
        {
            img: OrhunPicture,
            name: 'Orhun Mert Bozkurt',
            whatDo: 'Data Science',
            personalDetail:
                'Currently working at Tubitak and living in Kocaeli. Final year CS student.',
        },
        {
            img: SamedPicture,
            name: 'Abdussamed Kılıç',
            whatDo: 'Full Stack Developer',
            personalDetail:
                'Currently working at Scribeup and living in Kocaeli. Final year CS student.',
        },
    ];
    return (
        <div className="about-container">
            <div className="story-container">
                <h2 className="sectionTitle">&nbsp;Our Story</h2>
                <p className="story">
                    Gezginler bir yere seyahat etmek istediğinde öncelikli
                    olarak bazi şeyleri göz önünde bulundururlar. Bunlar;
                    seyahat bütçesi, gideceği turistik yerler, müzeler,
                    restoranlar vb. yerler hakkinda bilgi sahibi olmak ister ve
                    de kendilerine bir seyahat önerisi oluşturmak için araştirma
                    yapmaya koyulurlar. Bu öneriyi oluşturmak için sosyal medya
                    ve diğer platformlar üzerinden yararlanirlar, ancak kimi
                    zaman bu araştirmaya gereğinden fazla zaman alabilir, bu
                    araştirmayi minimuma düşürmek için de gezgine gitmek
                    istediği şehre göre bir seyahat öneri sistemini geliştirmek
                    ve bunu gezgine bir web sitesi üzerinden sunmak temel
                    amacimizdir.
                </p>
                <p className="story">
                    İnternet üzerinden alinan verilerle oluşturulmuş bir veri
                    kümesiyle Türkiye için kullaniciya genel ve
                    kişiselleştirilmiş seyahat öneri sisteminin geliştirilmesi
                    ile kullanicilara seyahat önerme araştirmasi için harcanan
                    zamanin minimuma indirilmesi amaçtir. Bunun için Recommender
                    Systems ve gerekli bazi yöntemler kullanilarak Seyahat Öneri
                    sistemi geliştirilecektir.
                </p>
            </div>
            <div className="team-container">
                <h2 className="sectionTitle">Our Team</h2>
                <div className="grid_team">
                    {teamMember.map((member, index) => (
                        <TeamCard teamMember={member} key={`member_${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};
