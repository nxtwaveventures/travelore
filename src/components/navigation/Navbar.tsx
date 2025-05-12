'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import styled from '@emotion/styled'

type MotionSpanProps = HTMLMotionProps<"span"> & {
    className?: string;
}

type MotionButtonProps = HTMLMotionProps<"button"> & {
    className?: string;
    onClick?: () => void;
}

type MotionLinkProps = HTMLMotionProps<"a"> & {
    href: string;
    className?: string;
}

const StyledDropdown = styled(motion.div)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0;
  z-index: 50;
`

const StyledMobileMenu = styled(motion.div)`
  overflow: hidden;
  display: block;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  @media (min-width: 640px) {
    display: none;
  }
`

const StyledMotionSpan = styled(motion.span) <MotionSpanProps>`
  cursor: pointer;
`

const StyledMotionButton = styled(motion.button) <MotionButtonProps>`
  cursor: pointer;
`

const NavLink = styled(motion(Link)) <MotionLinkProps>`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #9333ea, #db2777);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export function Navbar() {
    const { data: session } = useSession()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: "easeIn"
            }
        }
    }

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    }

    const linkVariants = {
        hover: {
            color: "#9333ea",
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and main nav */}
                    <div className="flex">
                        <Link
                            href="/"
                            className="flex-shrink-0 flex items-center"
                        >
                            <StyledMotionSpan
                                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                Travelore
                            </StyledMotionSpan>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NavLink
                                href="/destinations"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                                whileHover="hover"
                                variants={linkVariants}
                            >
                                Destinations
                            </NavLink>
                            <NavLink
                                href="/stories"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                                whileHover="hover"
                                variants={linkVariants}
                            >
                                Stories
                            </NavLink>
                            <NavLink
                                href="/about"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                                whileHover="hover"
                                variants={linkVariants}
                            >
                                About
                            </NavLink>
                        </div>
                    </div>

                    {/* User menu */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {session ? (
                            <div className="relative">
                                <StyledMotionButton
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {session.user?.image ? (
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={session.user.image}
                                            alt={session.user.name || ''}
                                        />
                                    ) : (
                                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                            <span className="text-sm font-medium text-purple-600">
                                                {session.user?.name?.[0] || 'U'}
                                            </span>
                                        </div>
                                    )}
                                </StyledMotionButton>

                                <AnimatePresence>
                                    {isMenuOpen && (
                                        <StyledDropdown
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={dropdownVariants}
                                        >
                                            <motion.div
                                                whileHover={{ backgroundColor: "#f3f4f6" }}
                                            >
                                                <Link
                                                    href="/profile"
                                                    className="block px-4 py-2 text-sm text-gray-700"
                                                >
                                                    Your Profile
                                                </Link>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ backgroundColor: "#f3f4f6" }}
                                            >
                                                <Link
                                                    href="/settings"
                                                    className="block px-4 py-2 text-sm text-gray-700"
                                                >
                                                    Settings
                                                </Link>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ backgroundColor: "#f3f4f6" }}
                                            >
                                                <button
                                                    onClick={() => signOut()}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                                                >
                                                    Sign out
                                                </button>
                                            </motion.div>
                                        </StyledDropdown>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/auth/signin"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900"
                                >
                                    Sign in
                                </Link>
                            </motion.div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <StyledMotionButton
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </StyledMotionButton>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <StyledMobileMenu
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <motion.div
                                whileHover={{ backgroundColor: "#f9fafb" }}
                            >
                                <Link
                                    href="/destinations"
                                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
                                >
                                    Destinations
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ backgroundColor: "#f9fafb" }}
                            >
                                <Link
                                    href="/stories"
                                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
                                >
                                    Stories
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ backgroundColor: "#f9fafb" }}
                            >
                                <Link
                                    href="/about"
                                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
                                >
                                    About
                                </Link>
                            </motion.div>
                        </div>
                        {session && (
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex items-center px-4">
                                    {session.user?.image ? (
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={session.user.image}
                                            alt={session.user.name || ''}
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                            <span className="text-sm font-medium text-purple-600">
                                                {session.user?.name?.[0] || 'U'}
                                            </span>
                                        </div>
                                    )}
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">
                                            {session.user?.name}
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                            {session.user?.email}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <motion.div
                                        whileHover={{ backgroundColor: "#f9fafb" }}
                                    >
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-base font-medium text-gray-500"
                                        >
                                            Your Profile
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ backgroundColor: "#f9fafb" }}
                                    >
                                        <Link
                                            href="/settings"
                                            className="block px-4 py-2 text-base font-medium text-gray-500"
                                        >
                                            Settings
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ backgroundColor: "#f9fafb" }}
                                    >
                                        <button
                                            onClick={() => signOut()}
                                            className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500"
                                        >
                                            Sign out
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </StyledMobileMenu>
                )}
            </AnimatePresence>
        </nav>
    )
} 