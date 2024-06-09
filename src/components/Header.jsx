import gameLogo from '../../public/game-logo.png'

export default function Header() {
    return (
        <header>
            <img src={gameLogo} alt="This shouldnt happen XD" />
            <h1>Tic-Tac-Toe</h1>
        </header>
    )
    

}