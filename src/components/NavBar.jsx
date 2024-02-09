import React from 'react'

const NavBar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RESUME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">SIGNUP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signin">SIGNIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/add">ADD RESUME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/view">VIEW RESUMES</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar