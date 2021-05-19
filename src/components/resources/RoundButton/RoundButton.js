import React from 'react'


export default function RoundButton({ children, onClick, className }) {
  return (
    <button class="button is-danger"
      onClick={() => onClick && onClick()}
      className={className}
    >
      {children}
    </button>
  )
}

