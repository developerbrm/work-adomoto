import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const ComingSoon = () => {
  return (
    <div className="coming-soon-page">
      <div className="grid-container">
        <h1>Coming Soon</h1>
        <Link href="/">
          <a>
            <Button variant="outlined" color="info" fullWidth>
              Back to Home
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
