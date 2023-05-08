import React from "react";



//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>My Todo Today List</h1>
			<ul>
				<li>
					<input type="text" placeholder="What you need todo?!"></input>
				</li>
				<li>
					Walk dog<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
				</li>
				<li>
					Finish homework<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
				</li>
				<li>
					Do laundry<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
				</li>
				<li>
					Fold Laundry<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
				</li>
				<li>
					Dishes<button type="button" class="close" data-dismiss="modal" aria-label="Close" float->
          <span aria-hidden="true">&times;</span></button>
				</li>
			</ul>
			<li>22 things</li>
		</div>
	);
};

export default Home;
