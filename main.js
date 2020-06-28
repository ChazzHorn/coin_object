let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

           this.state= Math.round(Math.random() * 1);
             
    },
    
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

           if(this.state=== 0){
               return 'Heads'
           }
           if(this.state=== 1){
               return 'Tails'
           }
           
           
    },
    toHTML: function() {
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        let Heads = document.createElement('img');
        let Tails = document.createElement('img');
        Tails.src = './images/Tails.png'
        Heads.src = './images/Heads.png'

        if (this.state === 0){
            return document.body.appendChild(Heads) 
        }
        if (this.state === 1){
            return document.body.appendChild(Tails)
        }
        
    },
    
    display20Flips: function(){
        let FlipsPTag =document.createElement('p')
            let resultOfToString = this.state
        
        for(counter=0; counter<20; counter++){
            
            FlipsPTag.append(resultOfToString)
            document.body.appendChild(FlipsPTag)
            
        }
    },
    display20Images: function(){
        
        
        for(counter1=0; counter1<20; counter1++){
            let newDiv =document.createElement('div')
            newDiv.style.display='inline'
            let resultofToHtml = this.toHTML()

            
            newDiv.appendChild(resultofToHtml)
            document.body.appendChild(newDiv)
        }
    }
};

coin.flip()
// coin.toString()
coin.display20Flips()
// coin.toHTML()
coin.display20Images()
// console.log(coin.toString())
