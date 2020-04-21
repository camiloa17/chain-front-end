
import Design from '../../images/design_illustration.svg';
import Develop from '../../images/develop_illustration.svg';
import Marketing from '../../images/marketing_illustration.svg';
import DataIl from '../../images/data_illustration.svg';

export default {
    arrowSectionData: [
        {
            id: 'section-1',
            name:'design',
            triangleUp: false,
            triangleDown: true,
            color: 'yellow',
            image: Design,
            alt:'Design-logo',
            title: 'First, defining the ideas and a well thought design.',
            paragraph: 'Understanding which are your problems and your users’ needs will help us define the following steps, where the results will be an ideal prototype ready to become a reality through development.',
            buttonText: null,
            hiddenContent: null
        },
        {
            id: 'section-2',
            name:'development',
            triangleUp: true,
            triangleDown: true,
            color: 'green',
            image: Develop,
            alt:'Develop-logo',
            title: 'Second, getting your idea materialize. ',
            paragraph: 'Having the final prototype in place will help us build, websites or internal system, using the best technology in the market. Our development process starts by having all your requirements in place, so we don’t miss anything that will be of utmost importance for your business. Get ready to jump start it with digital marketing strategies.',
            buttonText: 'View projects',
            hiddenContent: {id:'projects',slider:true, data:false}
        },
        {
            id: 'section-3',
            name:'digital-marketing',
            triangleUp: true,
            triangleDown: true,
            color: 'grey',
            image: Marketing,
            alt:'Marketing-logo',
            title: 'Third, taking off your website to another level.',
            paragraph: 'Having your website already online we will use the tools to bring the users that you need to be successful. According to your goals we must choose a personalize digital marketing strategy that will leverage your website to increase the lead generation or sales.',
            buttonText: 'View results',
            hiddenContent: { id: 'sales',slider:false, data: true }
        },
        {
            id: 'section-4',
            name:'data',
            triangleUp: true,
            triangleDown: false,
            color: 'black',
            image: DataIl,
            title: 'Fourth, using data to learn and improve.',
            paragraph: 'As a last step, you will be using your data to learn from your users, website and campaigns to help you improve what is not working and take better and quicker business decisions.  As we all know data is the new oil and exploiting it will bring bigger revenue.',
            buttonText: null,
            hiddenContent: null
        }
    ]
};
