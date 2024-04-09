import React, { useEffect, useState } from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './style.css'
import Typed from './components/Typed';
import Plot from 'react-plotly.js';
import pdfFile from './img/r.pdf';
import logo from './img/logo.png';
import AOS from 'aos';// aos
import 'aos/dist/aos.css';
import { useTts } from 'react-tts'; //speek
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact';
const Speech = () => {
  const { speak } = useTts();
  // update 2.0
  const [isDisabled, setIsDisabled] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  }
  // aos
  AOS.init();
  const [html, setUI] = useState(true)
  const [boot, setBoot] = useState(true)
  const [JS, setJS] = useState(true)
  const [react, setreact] = useState(true)
  const layout = {
    paper_bgcolor: `#03045e`,
    plot_bgcolor: `#03045e`,
    font: {
      color: 'rgba(255, 255, 255, 1)'
    }
  };
  const data = [
    {
      x: ['html & css', 'js', 'bootstrap & tailwind', 'react', 'node js', 'Firebase'], // Use category names as x values
      y: [85, 80, 90, 80, 60, 65], // Use corresponding y values
      type: 'bar',
      marker: {
        color: 'white',
      },
      textposition: 'auto', // Automatically position the text below the bars
    },
  ];
  // date
  const currentHour = new Date().getHours();
  // state mgmt
  const [message, setMessage] = useState('');
  const commands = [
    {
      command: ['reset', 'result', 'resort', 'delete chat'],
      callback: () => {
        resetTranscript()
        setMessage('')
        const utterance = new SpeechSynthesisUtterance('chat deleted');
        speak(utterance);
      }
    },
    {
      command: ['refresh', 'reload'],
      callback: () => {
        refreshPage()
      }
    },
    {
      command: ['stop', 'stop stop', 'stop command', 'stop voice command', 'stock'],
      callback: () => {
        SpeechRecognition.stopListening();
        setMessage('Voice Command Is Now OFF, press start to enable voice command')
        const utterance = new SpeechSynthesisUtterance('Voice Command Is Now OFF, press start to enable voice command, Thank you');
        speak(utterance);
      }
    },
    {
      command: ['shut up', 'chup'],
      callback: () => {
        setMessage('Say Stop to Run Site Manually')
        const utterance = new SpeechSynthesisUtterance('Say Stop to Run Site Manually');
        speak(utterance);
      }
    },
    {
      command: ['Hello', 'hay', 'watcher', 'watcher', 'watcher', 'hello watcher', 'hello watcher', 'hay watcher', 'hello bot', 'chat bot'],
      callback: () => {
        if (currentHour >= 5 && currentHour < 12) {
          setMessage("Hello Good morning! I Am watcher how can i help you");
          const utterance = new SpeechSynthesisUtterance('Hello Good morning! I Am watcher how can i help you');
          speak(utterance);
        } else if (currentHour >= 12 && currentHour < 17) {
          setMessage("Hello Good afternoon! I Am watcher how can i help you");
          const utterance = new SpeechSynthesisUtterance('Hello Good afternoon! I Am watcher how can i help you');
          speak(utterance);
        } else if (currentHour >= 17 && currentHour < 20) {
          setMessage("Hello Good evening! I Am watcher how can i help you");
          const utterance = new SpeechSynthesisUtterance('Hello Good evening! I Am watcher how can i help you');
          speak(utterance);
        } else {
          setMessage("Hello!,I Am watcher how can i help you");
          const utterance = new SpeechSynthesisUtterance('Hello!,I Am watcher how can i help you');
          speak(utterance);
        }
      }
    },
    {
      command: 'who are you',
      callback: () => {
        setMessage('I am watcher. I was developed by Mr. Ankit on 29/10/2023. How can i help you?')
        const utterance = new SpeechSynthesisUtterance('I am watcher. I was developed by Mr. Ankit on 29/10/2023. How can i help you?');
        speak(utterance);
      }
    },
    {
      command: ['contact', 'contact to admin', 'can i talk with you boss', 'can i talk with admin', 'how can I contact with admin', 'admin', 'admin contact'],
      callback: () => {
        setMessage('contact: ankitpanda922@gmail.com')
        const utterance = new SpeechSynthesisUtterance('contact to gmail ankitpanda922@gmail.com');
        speak(utterance);
      }
    },
    {
      command: ['great'],
      callback: () => {
        setMessage(`Thanks Boss`)
        const utterance = new SpeechSynthesisUtterance('Thanks Boss');
        speak(utterance);
      }
    },
    {
      command: ['Thanks'],
      callback: () => {
        setMessage(`Welcome Boss`)
        const utterance = new SpeechSynthesisUtterance('Welcome Boss');
        speak(utterance);
      }
    },
    {
      command: ['you are worst bot', 'worst bot', 'you are bad bot', 'you are not a good bot', 'you are not good'],
      callback: () => {
        setMessage('Currently, I am not at my best because I am in the development stage. Give me some time, and I will strive to improve.')
        const utterance = new SpeechSynthesisUtterance('Currently, I am not at my best because I am in the development stage. Give me some time, and I will strive to improve.');
        speak(utterance);
      }
    },
    {
      command: ['sorry'],
      callback: () => {
        setMessage('Its all right')
        const utterance = new SpeechSynthesisUtterance('Its all right');
        speak(utterance);
      }
    },
    {
      command: ['you are not a good'],
      callback: () => {
        setMessage('Currently, I am not at my best because I am in the development stage. Give me some time, and I will strive to improve.')
        const utterance = new SpeechSynthesisUtterance('Currently, I am not at my best because I am in the development stage. Give me some time, and I will strive to improve.');
        speak(utterance);
      }
    },
    {
      command: ['how are you'],
      callback: () => {
        setMessage('i am fine Thank you')
        const utterance = new SpeechSynthesisUtterance('i am fine Thank you');
        speak(utterance);
      }
    },
    {
      command: ['tell me about yourself'],
      callback: () => {
        setMessage('Hello, I am Ankit, specializing in Information Technology. My expertise lies in the realm of web development, with a strong command of HTML, CSS,JavaScript and react. I have dedicated myself to mastering these technologies to create engaging and dynamic user experiences. Over the course of my journey, I have actively contributed to three impactful projects, where I applied my skills to solve real-world challenges. These experiences have not only deepened my understanding of the technologies but also honed my problem-solving abilities. I am passionate about leveraging technology to create innovative solutions, and I am excited about the opportunities to continue growing in the dynamic field of IT.')
        const utterance = new SpeechSynthesisUtterance('Hello, I am Ankit, specializing in Information Technology. My expertise lies in the realm of web development, with a strong command of HTML, CSS,JavaScript and react. I have dedicated myself to mastering these technologies to create engaging and dynamic user experiences. Over the course of my journey, I have actively contributed to three impactful projects, where I applied my skills to solve real-world challenges. These experiences have not only deepened my understanding of the technologies but also honed my problem-solving abilities. I am passionate about leveraging technology to create innovative solutions, and I am excited about the opportunities to continue growing in the dynamic field of IT.');
        speak(utterance);
      }
    },
    {
      command: ['What is your knowledge of React'],
      callback: () => {
        setMessage('I have knowledge of React, including both basic and advanced concepts. I am also familiar with external libraries like Plotly.js, Redux, Re-chart, react voice recognition, Typed.js, and react-tts. ')
        const utterance = new SpeechSynthesisUtterance('I have knowledge of React, including both basic and advanced concepts. I am also familiar with external libraries like Plotly.js, Redux, Re-chart, react voice recognition, Typed.js, and react-tts. ');
        speak(utterance);
      }
    },
    {
      command: ['What are your achievements in life', 'What are your achievements in your life'],
      callback: () => {
        setMessage('I aim to excel as a full-stack developer, specializing in React and Next.js for the frontend and Node.js for the backend. My goal is to create seamless and efficient web applications by leveraging my skills in these technologies.')
        const utterance = new SpeechSynthesisUtterance('I aim to excel as a full-stack developer, specializing in React and Next.js for the frontend and Node.js for the backend. My goal is to create seamless and efficient web applications by leveraging my skills in these technologies. thank you');
        speak(utterance);
      }
    },
    {
      command: ['What are your weaknesses', 'What are your weakness'],
      callback: () => {
        setMessage('I sometimes feel uncomfortable when there is pending work. To address this weakness, I am actively working on improving my time management skills and prioritizing tasks to ensure a more organized and efficient workflow.')
        const utterance = new SpeechSynthesisUtterance('I sometimes feel uncomfortable when there is pending work. To address this weakness, I am actively working on improving my time management skills and prioritizing tasks to ensure a more organized and efficient workflow. thank you');
        speak(utterance);
      }
    },
    {
      command: ['What are your hobbies'],
      callback: () => {
        setMessage('My hobbies include programming, reading books, and playing chess. I find joy in problem-solving through coding, gaining knowledge from books, and engaging in strategic thinking while playing chess.')
        const utterance = new SpeechSynthesisUtterance('My hobbies include programming, reading books, and playing chess. I find joy in problem-solving through coding, gaining knowledge from books, and engaging in strategic thinking while playing chess.');
        speak(utterance);
      }
    },
    {
      command: ['top', 'top scroll', 'scroll top', 'scroll up'],
      callback: () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
    {
      command: ['down', 'scroll down'],
      callback: () => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }
    },
    {
      command: ['esc', 'exit'],
      callback: () => {
        BotClose()
      }
    },
    {
      command: ['download', 'resume download', 'download resume'],
      callback: () => {
        downloadPDF()
        const utterance = new SpeechSynthesisUtterance('resume downloading, please check download section');
        speak(utterance);
      }
    },
    {
      command: ['start', 'open', 'bot', 'but', `let's chat`],
      callback: () => {
        BotFire()
      }
    },
    {
      command: ['voice command', 'command', 'what is this', 'voice', `active voice command`],
      callback: () => {
        BotFire()
        const utterance = new SpeechSynthesisUtterance('Voice command activated');
        speak(utterance);
      }
    },
    {
      command: ['Start auto mode', 'auto mode', 'automode', 'press start', `enable auto run`, 'activate auto mode'],
      callback: () => {
        AutoAction()
        const utterance = new SpeechSynthesisUtterance('Voice command activated');
        speak(utterance);
        BotClose()
      }
    },
    {
      command: ['instruction', 'how to run website', 'open instruction'],
      callback: () => {
        InstructionFire()
        const utterance = new SpeechSynthesisUtterance('read the instruction and run with voice command');
        speak(utterance);
      }
    },
    {
      command: ['close', 'exit'],
      callback: () => {
        BotClose()
      }
    },
    {
      command: ['work', 'works', 'walk'],
      callback: () => {
        FireWork()
      }
    },
    {
      command: ['about', 'about about'],
      callback: () => {
        FireAbout()
      }
    },
    {
      command: ['resume', 'resume resume'],
      callback: () => {
        FireResume()
      }
    },
    {
      command: ['skill', 'skills', 'Explain your skills.'],
      callback: () => {
        FireSkill()
        setMessage('I possess a strong command of HTML (85%), CSS (85%), Bootstrap (80%), JavaScript (90%), and React (85%). My skills encompass creating well-structured web pages, designing responsive interfaces, and developing dynamic applications with a solid understanding of each technologys intricacies.')
        const utterance = new SpeechSynthesisUtterance('I possess a strong command of HTML (85%), CSS (85%), Bootstrap (80%), JavaScript (90%), and React (85%). My skills encompass creating well-structured web pages, designing responsive interfaces, and developing dynamic applications with a solid understanding of each technologys intricacies.');
        speak(utterance);

      }
    },
    {
      command: ['hydpg', 'HYD PG', 'hydrabad pg', 'open hydpg', 'open hydrabad pg'],
      callback: () => {
        FireHYDPG()
        const utterance = new SpeechSynthesisUtterance('Crafted a user-friendly React platform for PG search in Hyderabad, integrating dynamic components and efficient data management for seamless browsing and quick information retrieval.');
        speak(utterance);
      }
    },
    {
      command: ['flimflix', 'FLIMFLIX', 'movie website', 'movie website', 'open flimflix', 'open flix'],
      callback: () => {
        FireFlimFlix()
        const utterance = new SpeechSynthesisUtterance('Launched FilmFlix, a dynamic website with Bollywood, Hollywood, and Tollywood movies. User-friendly design ensures seamless browsing, accessibility, and updated movie selections.');
        speak(utterance);
      }
    },
    {
      command: ['siim', ' s i i am', ' s i i m', 'open siim', 'open siim website', 'SIIM', 'S I I M'],
      callback: () => {
        FireFTF()
        const utterance = new SpeechSynthesisUtterance('I have created a responsive college website template using HTML, CSS, and JavaScript. It features a clean design, adapts to various devices, and includes interactive elements for a user-friendly experience.');
        speak(utterance);
      }
    },
    {
      command: ['22 templates', '22 tablets', '22 template', 'template', 'templates', 'open 22 templates'],
      callback: () => {
        Fire21Template()
        const utterance = new SpeechSynthesisUtterance('Designed 22 diverse and functional templates showcasing proficiency in various styles. Meticulously crafted for adaptability and user-friendliness across different platforms and project requirements.');
        speak(utterance);
      }
    },
    {
      command: ['facebook', 'fb', 'open facebook', 'open fb'],
      callback: () => {
        FireFb()
        const utterance = new SpeechSynthesisUtterance('Welcome to my Facebook account');
        speak(utterance);
      }
    },
    {
      command: ['instagram', 'insta'],
      callback: () => {
        FireInsta()
        const utterance = new SpeechSynthesisUtterance('Welcome to my instagram account');
        speak(utterance);
      }
    },
    {
      command: ['LinkedIn', 'open LinkedIn'],
      callback: () => {
        FireLink()
        const utterance = new SpeechSynthesisUtterance('Welcome to my linkedin account');
        speak(utterance);
      }
    },
    {
      command: ['twitter', 'open twitter', 'x', 'open x'],
      callback: () => {
        FireTwit()
        const utterance = new SpeechSynthesisUtterance('Welcome to my x account');
        speak(utterance);
      }
    },
    {
      command: ['git', 'github', 'open git', 'open github', 'get hub', ' get up'],
      callback: () => {
        FireGit()
        const utterance = new SpeechSynthesisUtterance('Welcome to my github account');
        speak(utterance);
      }
    },
    {
      command: ['gmail', 'open gmail'],
      callback: () => {
        FireGmail()
      }
    },
    {
      command: ['html', 'html html', 'html and css', 'html and css html and css', 'css'],
      callback: () => {
        FireHtml()
      }
    },
    {
      command: ['Bootstrap', 'Bootstrap Bootstrap', 'show bootstrap'],
      callback: () => {
        FireBoot()
      }
    },
    {
      command: ['javascript', 'javascript javascript', 'show javascript', 'js'],
      callback: () => {
        FireJS()
      }
    },
    {
      command: ['react', 'react react', 'show react', 'react js'],
      callback: () => {
        FireReact()
      }
    },
  ]
  // botOpen
  function BotFire() {
    var element = document.querySelector('[data-bs-target="#exampleModal"]');
    if (element) {
      element.click();
    }
  }
  function AutoModal() {
    var element = document.querySelector('[data-bs-target="#auto-modal"]');
    if (element) {
      element.click();
    }
  }
  // Instruction Open
  function InstructionFire() {
    var element = document.querySelector('[data-bs-target="#modal-ins"]');
    if (element) {
      element.click();
    }
  }
  // BotClose
  function BotClose() {
    const element = document.querySelector('[data-bs-dismiss="modal"]');
    if (element) {
      element.click();
    }
  }
  // Fire works
  function FireWork() {
    const element = document.getElementById('work');
    element.scrollIntoView({ behavior: 'smooth' });
    const utterance = new SpeechSynthesisUtterance('These are my some works and i am currently working on skill technologies.');
    speak(utterance);
  }
  function FireAbout() {
    const element = document.getElementById('about');
    element.scrollIntoView({ behavior: 'smooth' });
    const utterance = new SpeechSynthesisUtterance('This is my about section please check');
    speak(utterance);
  }
  function FireSkill() {
    const element = document.getElementById('skill');
    element.scrollIntoView({ behavior: 'smooth' });
    const utterance = new SpeechSynthesisUtterance('These are my skills');
    speak(utterance);
  }
  function FireResume() {
    const element = document.getElementById('resume');
    element.scrollIntoView({ behavior: 'smooth' });
    const utterance = new SpeechSynthesisUtterance('These are my Qualification');
    speak(utterance);
  }

  // fireing work cards
  function FireHYDPG() {
    window.open("https://hydpg.netlify.app/", "_blank");
  }
  function FireFlimFlix() {
    window.open("https://ankit-1k.github.io/movie-website/", "_blank");
  }
  function Fire21Template() {
    window.open("https://quiet-kringle-3511f6.netlify.app", "_blank");
  }
  function FireFTF() {
    window.open("https://ankit-1k.github.io/SIIM/", "_blank");
  }
  function FireFb() {
    window.open('https://www.facebook.com/ankit.panda.180')
  }
  function FireInsta() {
    window.open('https://www.instagram.com/ankit_kumar_panda_/')
  }
  function FireGit() {
    window.open('https://github.com/ankit-1k')
  }
  function FireLink() {
    window.open('https://www.linkedin.com/in/ankit-kumar-panda-b67997218/')
  }
  function FireTwit() {
    window.open('https://twitter.com/Ankit5116k')
  }
  function FireGmail() {
    var email = "ankitpanda922@gmail.com";
    var mailtoLink = "mailto:" + email;
    window.open(mailtoLink, "_blank");
  }
  // const FirePhone = () => {
  //   const phoneNumber = '9178081269';
  //   window.location.href = `tel:${phoneNumber}`;
  // };
  const FireHtml = () => {
    setUI(!html)
  }
  const FireBoot = () => {
    setBoot(!boot)
  }
  const FireJS = () => {
    setJS(!JS)
  }
  const FireReact = () => {
    setreact(!react)
  }
  var {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });
  useEffect(() => {
    if (finalTranscript !== '') {
      // console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };

  // resume download
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'r.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    const utterance = new SpeechSynthesisUtterance('Resume downloaded. please check Download section. Thank you boss');
    speak(utterance);
  };
  // update 2.0 date 05-03-2024
  const showMessage = () => {
    setTimeout(() => {
      AutoModal()
    }, 1000);
  }; showMessage()
  // targeting work
  const autoWork = () => {
    setTimeout(() => {
      FireWork()
    }, 1000);
  };
  const autoAbout = () => {
    setTimeout(() => {
      FireAbout()
    }, 7000);
  };
  const autoSkill = () => {
    setTimeout(() => {
      FireSkill()
    }, 9000);
  };
  const autoResume = () => {
    setTimeout(() => {
      FireResume()
    }, 12000);
  };
  const autoBot = () => {
    setTimeout(() => {
      BotFire()
      const utterance = new SpeechSynthesisUtterance('Hello i am watcher. How can i help you');
      speak(utterance);
      listenContinuously()
    }, 15000);
  };

  const AutoAction = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 10000);
    autoWork()
    autoAbout()
    autoSkill()
    autoResume()
    autoBot()
  }
  // AutoAction()
  return (
    <div>
      <main className={`main-container`}>
        <section className="navigation">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='costome-nav'>
            <div className="container-fluid">
              <p href='#' className="navbar-brand text-warning"><img src={logo} className='logo' height={50} width={150} alt="" data-aos="flip-up" /></p>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                  <li className="nav-item" data-aos="zoom-in-down">
                    <a className="nav-link white" href="#work" onClick={FireWork}>Works</a>
                    <div className="hr"></div>
                  </li>
                  <li className="nav-item" data-aos="zoom-in-down">
                    <a className="nav-link white" aria-current="page" href="#about">About</a>
                    <div className="hr"></div>
                  </li>
                  <li className="nav-item" data-aos="zoom-in-down">
                    <a className="nav-link white" href="#resume">Resume</a>
                    <div className="hr"></div>
                  </li>
                  <li className="nav-item" data-aos="zoom-in-down">
                    <p type="button" className="nav-link white" data-bs-toggle="modal" data-bs-target="#modal-ins">
                      Instruction
                    </p>
                    <div className="hr"></div>
                  </li>
                  <li className="nav-item" data-aos="zoom-in-down">
                    <p className="nav-link text-info">
                      <button className='flame' onClick={AutoAction} disabled={isDisabled}>
                        start
                      </button>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        <section className='banner'>
          <div className="wrapper-banner">
            <div className="sec-b-1">
              <Typed />
            </div>
          </div>
        </section>
        <section className={`work`}>
          <h2 className={`text-center heading`} id='work' data-aos="fade-up">Works</h2>
          {/* Hydpg */}
          <div className="sec-work">
            <div className={`card`} onClick={FireHYDPG}>
              <div className={`card-body`} data-aos="fade-up">
                <h5 className="card-title text-center">HYDPG</h5>
                <p className="card-text">
                  Crafted a user-friendly React platform for PG search in Hyderabad, integrating dynamic components and efficient data management for seamless browsing and quick information retrieval.        </p>
              </div>
            </div>
            {/* FilmFlix */}
            <div className="card" onClick={FireFlimFlix}>
              <div className="card-body" data-aos="fade-up">
                <h5 className="card-title">FlimFlix</h5>
                <p className="card-text">
                  Launched FilmFlix, a dynamic website with Bollywood, Hollywood, and Tollywood movies. User-friendly design ensures seamless browsing, accessibility, and updated movie selections.           </p>     </div>
            </div>
            {/* 21Temp*/}
            <div className="card" onClick={Fire21Template}>
              <div className="card-body" data-aos="fade-up">
                <h5 className="card-title">22 Templates</h5>
                <p className="card-text">
                  Designed 22 diverse and functional templates showcasing proficiency in various styles. Meticulously crafted for adaptability and user-friendliness across different platforms and project requirements.    </p>           </div>
            </div>
            {/* FTF*/}
            <div className="card" onClick={FireFTF}>
              <div className="card-body" data-aos="fade-up">
                <h5 className="card-title">SIIM</h5>
                <p className="card-text">
                  I've created a responsive college website template using HTML, CSS, and JavaScript. It features a clean design, adapts to various devices, and includes interactive elements for a user-friendly experience. </p>
              </div>
            </div>
          </div>
        </section>
        {/* skills */}
        <h2 className={`text-center skill-head heading`} id='skill'>Skills</h2>
        <section className="skills switch-0" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <div className="sec-skill-1 p-1">
            <div className="sk">
              <div className="html">HTML</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="sk">
              <div className="html">CSS</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '85%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="sk">
              <div className="html">JavaScript</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '95%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="sk">
              <div className="html">React</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '93%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="sk">
              <div className="html">Node JS</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="sk">
              <div className="html">Firebase</div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </section>
        {/* for Lg */}
        <section className="skill-set switch-1" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <div className="wrap-slilset">
            <div>
              <Plot
                data={data}
                key={JSON.stringify(data)}
                layout={layout}
              />
            </div>
          </div>
        </section>
        <section className="about">
          <h2 className={`text-center mt-5 heading`} id='about'>About</h2>
          <div className="sec-about">
            <div className="card card-about">
              <p data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                "As a skilled programmer, I possess expertise in building responsive web designs using HTML, CSS,,bootstrap,JavaScript. Proficient in frameworks such as Bootstrap,Tailwind and React, I also have a fundamental understanding of Angular,Node Js,Firebase. Currently, I am engaged in freelancing activities, specializing in the development of static websites for various clients. My focus lies in creating visually appealing and user-friendly interfaces, ensuring a seamless and engaging user experience. With a strong foundation in web development technologies, I continuously strive to implement the latest industry trends and best practices in my projects, aiming to deliver high-quality and efficient solutions tailored to meet client requirements."            </p>
            </div>
          </div>
        </section>
        <section className="resume mt-5">
          <h2 className={`text-center heading`} id='resume'>Resume</h2>
          {/* present */}
          <div className="sec-resume">
            <div className="card hello" data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              <div className={`card-body`}>
                <h5 className="card-title">Freelancing</h5>
                <p className="card-text">
                  I specialize in creating sleek static websites tailored for small YouTubers. Elevate your online presence with a personalized site showcasing your content, increasing visibility, and engaging your audience. Let's turn your YouTube channel into a professional brand.                </p>

              </div>
            </div>
            {/* certification */}
            <div className="card" data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              <div className={`card-body`}>
                <h5 className="card-title">Full stack Java and React</h5>
                <p className="card-text">
                  Certified in Full Stack Java and React through Naresh IT. Equipped with comprehensive skills in Java and proficiency in React, ready to develop dynamic web applications. My training ensures a robust foundation for versatile and efficient software development.                </p>

              </div>
            </div>
            {/* BCA */}
            <div className="card" data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              <div className={`card-body`}>
                <h5 className="card-title">BCA</h5>
                <p className="card-text">
                  Graduated with a Bachelor's in Computer Applications from Vikash Institute of IT and Management. Acquired a strong foundation in IT, honing skills in programming, databases, and software development, prepared for impactful roles in the tech industry.                </p>

              </div>
            </div>
            {/* 12th */}
            <div className="card" data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              <div className={`card-body`}>
                <h5 className="card-title">10th & 12th</h5>
                <p className="card-text">
                  Rarned a solid educational foundation with emphasis on science, graduating with a 12th-grade diploma from MMM +2 Science College. Developed academic excellence and expertise at SSVM School, laying the groundwork for future pursuits in higher education or career paths.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*download resume  */}
        <section className="download-resume d-flex justify-content-center">
          <button className='animated-button theme-color theme-bg-color' onClick={downloadPDF}>Download CV</button>
        </section>
        {/* contact me */}
        <Contact />
        <section className="contact">
          <div className="contact-sec">
            <div className="fb" onClick={FireFb} data-aos="zoom-in-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <div className="insta" onClick={FireInsta} data-aos="zoom-in-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
            <div className="link" onClick={FireLink} data-aos="zoom-in-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
            <div className="git" onClick={FireGit} data-aos="zoom-in-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <div className="twit" onClick={FireTwit} data-aos="zoom-in-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      {/* bot-section */}
      <section className="bot">
        <button type="button" className="btn btn-info custom-button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={BotFire}>
          <div className="bot-logo">
            <img src="https://www.bacancytechnology.com/blog/wp-content/uploads/2019/08/ezgif.com-optimize-5.gif" height={50} width={50} alt="Start chat" />
          </div>
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body modal-bg">
                <div className="close-btn-modal d-flex justify-content-end">
                  <button type="button" className='btn btn-outline-info btn-sm' data-bs-dismiss="modal" aria-label="Close" onClick={BotClose}>
                  </button>
                </div>
                <section className="sec">
                  <div className="container">
                    <div className='player'>
                    </div>
                    <div className="wrapper wrap-txt">
                      <div className='transcript'>
                        <h4>You</h4>
                        <span>
                          {
                            transcript
                          }
                        </span>
                      </div>
                      <div className='msg'>
                        <h4>Watcher
                          <span>
                            {listening ? <svg className='online' xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#00ff33" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg> : (
                              <svg className='online' xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#a0a1a2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                            )}
                          </span>
                        </h4>
                        {
                          message
                        }
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-start'>
                    <button className='start' type="button" onClick={listenContinuously}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#2b00ff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                    </button>
                    <button className='close' type="button" onClick={SpeechRecognition.stopListening}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#751710" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*instruction modal */}
      <div className="modal fade" id="modal-ins" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header text-white bg-dark">
              <h5 className="modal-title" id="exampleModalLabel">Read Voice Command Instructions</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <section className="instruction-sec">
                <h5 className="text-info text-center">Voice Command Action</h5>
              </section>
              <section className="text-danger">
                Click 'Start', grant microphone access, and say 'Hello' or follow provided instructions to navigate our voice-controlled website. Ensure precise commands, as incorrect inputs may lead to unexpected results. Speak confidently for a seamless, responsive experience – let the magic unfold!</section>
              <table>
                <thead>
                  <tr>
                    <th>Commands</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Header 1">'Start auto mode', 'auto mode', 'automode', 'press start', `enable auto run`,'activate auto mode'( <span className="text-danger text-sm fw-bold">new</span> )</td>
                    <td data-label="Header 2">Enable auto mode for 14second</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'hello','hello bot', 'chat bot','hay', 'watcher','watcher','hello watcher','hay watcher'</td>
                    <td data-label="Header 2">as per time reply...</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'who are you</td>
                    <td data-label="Header 2">to know about bot </td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'down', 'scroll down'</td>
                    <td data-label="Header 2">for scroll-down</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'top', 'top scroll', 'scroll top'</td>
                    <td data-label="Header 2">'reset', 'clear'</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'download', 'resume download','download resume'</td>
                    <td data-label="Header 2">to download resume</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'start', 'open', 'bot', 'but', `let's chat`</td>
                    <td data-label="Header 2">to open chatting section</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'close', 'exit'</td>
                    <td data-label="Header 2">to close chat section</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'instruction', 'how to run website', 'open instruction'</td>
                    <td data-label="Header 2">to open voice command instructions</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'work', 'works', 'walk'</td>
                    <td data-label="Header 2">to go to the work section</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'about', 'about about'</td>
                    <td data-label="Header 2">to go to the about section</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'resume', 'resume resume'</td>
                    <td data-label="Header 2">to go to the resume section</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'hydpg', 'HYD PG', 'hydrabad pg', 'open hydpg', 'open hydrabad pg'</td>
                    <td data-label="Header 2">to open HYDPG project</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'flimflix', 'FLIMFLIX', 'movie website', 'open flimflix', 'open flix'</td>
                    <td data-label="Header 2">to open FLIMFLIX website</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'siim', ' s i i am', ' s i i m', 'open siim', 'open siim website', 'SIIM', 'S I I M'</td>
                    <td data-label="Header 2">to open SIIM website</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'22 templates', '22 tablets', '22 template', 'template', 'templates', 'open 22 templates'</td>
                    <td data-label="Header 2">to open 22 template website</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'facebook', 'fb', 'open facebook', 'open fb'</td>
                    <td data-label="Header 2">to open Facebook</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'instagram', 'insta'</td>
                    <td data-label="Header 2">to open Instagram</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'LinkedIn', 'open LinkedIn','twitter', 'open twitter','git', 'github', 'open git', 'open github', 'get hub', ' get up','gmail', 'open gmail'</td>
                    <td data-label="Header 2">to open LinkedIn, Twitter, GitHub, and Gmail</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'html', 'html html', 'html and css', 'html and css html and css', 'css'</td>
                    <td data-label="Header 2">to toggle HTML skill</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'Bootstrap', 'Bootstrap Bootstrap', 'show bootstrap'</td>
                    <td data-label="Header 2">to toggle Bootstrap</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'javascript', 'javascript javascript', 'show javascript', 'js'</td>
                    <td data-label="Header 2">to toggle JavaScript</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">'react', 'react react', 'show react', 'react js'</td>
                    <td data-label="Header 2">to toggle ReactJS</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="about-me text-info text-center">About me</h2>
              <table>
                <thead>
                  <tr>
                    <th>Commands</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Header 1">'tell me about yourself'</td>
                    <td data-label="Header 2">About Me</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">What is your knowledge of React</td>
                    <td data-label="Header 2">Know my react knowledge</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">What are your achievements in life</td>
                    <td data-label="Header 2">know about my achievements</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">What are your weaknesses</td>
                    <td data-label="Header 2">know about my weakness</td>
                  </tr>
                  <tr>
                    <td data-label="Header 1">What are your hobbies</td>
                    <td data-label="Header 2">Know my react knowledge</td>
                  </tr>
                </tbody>
                <div className="section bug-report">
                  <p style={{ marginTop: '20px', fontSize: '16px', color: '#333' }}>
                    If you are facing any technical issue, please feel free to{' '}
                    <a href="mailto:pandaankit167@mail.com" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
                      devsupport@gmail.com
                    </a>.
                    Our dedicated support team is here for you!
                  </p>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Speech;