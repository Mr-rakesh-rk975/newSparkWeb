import React from 'react';
import '../DashBoard/Dashboard.css'

function Dashboard() {
  return (
    <>
    <div className="admin-panel clearfix">
  <div className="slidebar">
    <div className="logo">
     <span></span>
    </div>
    <ul>
      <li><a href="#dashboard" id="targeted">dashboard</a></li>
      <li><a href="#posts">posts</a></li>
      <li><a href="#media">media</a></li>
      <li><a href="#pages">pages</a></li>
      <li><a href="#links">links</a></li>
      <li><a href="#comments">comments</a></li>
      <li><a href="#widgets">widgets</a></li>
      <li><a href="#plugins">plugins</a></li>
      <li><a href="#users">users</a></li>
      <li><a href="#tools">tools</a></li>
      <li><a href="#settings">settings</a></li>
    </ul>
  </div>
  <div className="main">
    <ul className="topbar clearfix">
      <li><a href="/abc">q</a></li>
      <li><a href="/abc">p</a></li>
      <li><a href="/abc">o</a></li>
      <li><a href="/abc">f</a></li>
      <li><a href="/abc">n</a></li>
    </ul>
    <div className="mainContent clearfix">
      <div id="dashboard">
        <h2 className="header"><span className="icon"></span>Dashboard</h2>
          <div className="monitor">
            <h4>Right Now</h4>
            <div className="clearfix">
              <ul className="content">
                <li>content</li>
                <li className="posts"><span className="count">179</span><a href="/">posts</a></li>
                <li className="pages"><span className="count">13</span><a href="/">pages</a></li>
                <li className="categories"><span className="count">21</span><a href="/">categories</a></li>
                <li className="tags"><span className="count">305</span><a href="/">tags</a></li>
              </ul>
              <ul className="discussions">
                <li>discussions</li>
                <li className="comments"><span className="count">353</span><a href="/">comments</a></li>
                <li className="approved"><span className="count">319</span><a href="/">approved</a></li>
                <li className="pending"><span className="count">0</span><a href="/">pending</a></li>
                <li className="spam"><span className="count">34</span><a href="/">spam</a></li>
             </ul>
           </div>
           <p>Theme <a href="/">Twenty Eleven</a> with <a href="/">3 widgets</a></p>
         </div>
         <div className="quick-press">
           <h4>Quick Press</h4>
           <form action="" method="post">
             <input type="text" name="title" placeholder="Title"/>
             <input type="text" name="content" placeholder="Content"/>
             <input type="text" name="tags" placeholder="Tags"/>
             <button type="button" className="save">l</button>
             <button type="button" className="delet">m</button>
             <button type="submit" className="submit" name="submit">Publish</button>
           </form>
         </div>
       </div>
       <div id="posts">
         <h2 className="header">posts</h2>
       </div>
       <div id="media">
         <h2 className="header">media</h2>
       </div>
       <div id="pages">
         <h2 className="header">pages</h2>
       </div>
       <div id="links">
         <h2 className="header">links</h2>
       </div>
       <div id="comments">
         <h2 className="header">comments</h2>
       </div>
       <div id="widgets">
         <h2 className="header">widgets</h2>
       </div>
       <div id="plugins">
         <h2 className="header">plugins</h2>
       </div>
       <div id="users">
         <h2 className="header">users</h2>
       </div>
       <div id="tools">
         <h2 className="header">tools</h2>
       </div>
       <div id="settings">
         <h2 className="header">settings</h2>
       </div>
     </div>
     <ul className="statusbar">
       <li><a href="/">Messagwe</a></li>
       <li><a href="/">Status</a></li>
       <li className="profiles-setting"><a href="/">s</a></li>
       <li className="logout"><a href="/">k</a></li>
     </ul>
   </div>
</div>
    </>
    )
}

export default Dashboard