import React, { useEffect } from "react";

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = "Ghostly - Page Not Found";
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-2">
        The page you are looking for does not exist.
      </p>
      <p className="text-lg">
        Please check the URL or navigate back to the home page.
      </p>
      {/* Add any additional content or components as needed */}
    </div>
  );
};

export default NotFoundPage;
