import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          excepturi at? Fuga, in officiis. Ut iure consectetur architecto
          aspernatur asperiores illum repellat amet deserunt perspiciatis
          assumenda, explicabo autem facilis molestias earum fugiat, doloribus
          vitae dignissimos dolore. Aperiam!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          culpa nulla quo maiores nihil, ratione repudiandae molestiae. Enim
          dolore cumque minus officia. Nisi, nostrum. Iste explicabo voluptates
          sed.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
