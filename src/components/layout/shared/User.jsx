import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function User({item: {login, avatar_url}}) {
  return (
    <div  data-theme='light' className='card compact side shadow-md bg-neutral-500'>
      <div className="card-body flex-row items-center space-x-4">
        <div>
          <div className='avatar'>
            <div className="rounded-full w-14 h-14">
              <img src={avatar_url} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>Visit profile</Link>
        </div>
      </div>
    </div>
  )
}

User.prototype = {
    item : PropTypes.object.isRequired,
}
export default User
