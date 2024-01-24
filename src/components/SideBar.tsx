import avatar from '../../public/img/Design sem nome.png'
import '../styles/components/sideBar.sass'
import InformationsContainer from './InformationsContainer';
import SocialNetwork from './SocialNetwork';

function SideBar() {
  return (
    <aside id="sideBar">
      <img src={avatar} alt="user" />
      <p className="title">Desenvolvedor web full-stack </p>
      <SocialNetwork/>
      <InformationsContainer/>
      <a
        href=""
        className="btn"
      >
        {' '}
        Dowload curriculo{' '}
      </a>
    </aside>
  );
}

export default SideBar;
