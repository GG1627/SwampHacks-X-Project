import React, {useState} from "react";
import "./HomeScreen.css";
import myImage from "./heart.png";  

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('tab-A');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="HomeScreen_container">
      <div className="window" style={{ width: "700px" }}>
        <div className="title-bar">
          <div className="title-bar-text">Welcome To:</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <img src={myImage} className="heart-image"></img>
          <p><span className="root-text">Root</span> & <span className="reach-text">Reach</span></p>
          <img src={myImage} className="heart-image"></img>
        </div>
      </div>
      <section className="tabs" style={{ maxWidth: '500px' }}>
        <menu role="tablist" aria-label="Sample Tabs">
          <button role="tab" aria-selected={activeTab === 'tab-A'} aria-controls="tab-A" onClick={() => handleTabClick('tab-A')}>About Us</button>
          <button role="tab" aria-selected={activeTab === 'tab-B'} aria-controls="tab-B" onClick={() => handleTabClick('tab-B')}>Creators</button>
        </menu>
        <article role="tabpanel" id="tab-A" hidden={activeTab !== 'tab-A'}>
          <h3>Tab Content</h3>
          <p>
            You create the tabs, you would use a <code>menu role="tablist"</code> element then for the tab titles you use a <code>button</code> with the <code>aria-controls</code> parameter set to match the relative <code>role="tabpanel"</code>'s element.
          </p>
          <p>
            Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role" target="_blank">MDN Web docs - ARIA: tab role</a>
          </p>
        </article>
        <article role="tabpanel" id="tab-B" hidden={activeTab !== 'tab-B'}>
        <h3>Tab Content</h3>
          <span className="root-text">
            You create the tabs, you would use a <code>menu role="tablist"</code> element then for the tab titles you use a <code>button</code> with the <code>aria-controls</code> parameter set to match the relative <code>role="tabpanel"</code>'s element.
          </span>
          <p>
            Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role" target="_blank">MDN Web docs - ARIA: tab role</a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default HomeScreen;
