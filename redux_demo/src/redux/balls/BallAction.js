//creates an action
//returs an action =>object

const BUY_BALL = 'BUY_BALL';
// if i need to make a change it can be done here and reflected everywhere
export const buyBall =()=>{
    return {
        type:BUY_BALL
    }
}