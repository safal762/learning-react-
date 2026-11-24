import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Container, Logo, LogoutBtn } from '../index.js'

function Header() {
  const authStatus = useSelector((state) => {
    return state.auth.status
  })
  const {slug}=useParams()
  const navigate = useNavigate()

  const navigateBtns = [
    {
      name: "Home",
      slug: "/",
      active: true
    }, {
      name: "All Posts",
      slug: "/allpost",
      active: true
    },
    {
      name: "create post",
      slug: "/addpost",
      active: true
    },
     {
      name: "login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "signup",
      slug: "/signup",
      active: !authStatus
    }
  ]

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="flex items-center gap-6">
            {
              navigateBtns.map((item) => item ? ( // using ternery operator 
                <Link key={item.name} to={`${item.slug}`}>
                  <li className="text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-600">{item.name}</li>
                </Link>
              ) : null)
            }
 
          </ul>

          {
            authStatus && (
              <LogoutBtn />
            )
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header