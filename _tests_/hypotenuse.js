// Pythagoras' theorem states that for all right-angled triangles, 
// 'The square on the hypotenuse is equal to the sum of the squares on the other 
// two sides'. The hypotenuse is the longest side and it's always opposite the 
// right angle.


function hypotenuse (a,b){
    return (((a)**2 + (b)**2)**0.5);
}

module.exports = hypotenuse;