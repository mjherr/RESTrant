const React = require('react')
const Def = require('./default')

function home () {
   return (
   <Def>
        <main>
            <h1>Rest Rant</h1>
            <div>
                <img src="/images/chia-fruitcup.jpg" alt="Chia Fruit Cup"/>
                Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
   )
}

module.exports = home