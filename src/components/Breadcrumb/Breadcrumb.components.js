import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"

export default function Breadcrumb({ linkList=[], pageName="" }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                        <FaHome /> Home
                    </Link>
                </li>

                {linkList ? linkList.map((link) => 
                    <li className="breadcrumb-item">
                        <Link to={link.linkUrl}>
                            {link.name}
                        </Link>
                    </li>
                ) : ""}

                <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                </li>
            </ol>
        </nav>
    )
}