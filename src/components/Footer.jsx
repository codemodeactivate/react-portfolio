import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify/icons-simple-icons/leetcode';
const Footer = () => {
  return (
    <div className="bg-white border-b-4 border-gray-800">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto pt-2">
        <div className="flex justify-between items-center gap-4 py-8">
          <span className="text-gray-800 text-lg font-semibold">Jeff Zenko © 2023. All Rights Reserved</span>

          <div className="flex gap-4">
            <a target="_blank" rel="noreferrer" alt="github" className="text-gray-800 hover:text-gray-500 active:text-gray-600 transition duration-100" href="https://github.com/codemodeactivate">
            <FaGithub size={30} />
            </a>
            <a target="_blank" rel="noreferrer" alt="github" className="text-gray-800 hover:text-gray-500 active:text-gray-600 transition duration-100" href="https://www.linkedin.com/in/jeff-zenko">
            <FaLinkedin size={30} />
            </a>
            <a target="_blank" rel="noreferrer" alt="leetcode" className="text-gray-800 hover:text-gray-500 active:text-gray-600 transition duration-100" href="https://leetcode.com/jzenko/">
              <Icon icon={leetcodeIcon} width={30} height={30} />
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
