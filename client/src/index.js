import '@fortawesome/fontawesome-free/css/all.css'
import Modal from './components/Modal'
import ideaForm from './components/ideaform'
import IdeaList from './components/idealist'
import './css/style.css';

const modal = new Modal();
const ideaform = new ideaForm();
const idealist = new IdeaList();


idealist.render();
ideaform.render();

