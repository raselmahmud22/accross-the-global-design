import eye from "../../assets/eye.png";
import share from "../../assets/share-icon.png";
import dot from "../../assets/3dot-icon.png";

const ArticlePosts = ({
  coverImg,
  categoryImg,
  title,
  description,
  profile,
  name,
}) => {
  return (
    <article
      style={{
        background: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: "4px",
        marginBottom: "16px",
      }}>
      <img src={coverImg} className="img-fluid" alt="" />
      <div style={{ padding: "20px" }}>
        <img src={categoryImg} className="img-fluid" alt="" />
        <div className="d-flex justify-content-between">
          <h3
            style={{
              fontWeight: "1000",
              fontSize: "22px",
              lineHeight: "134.17%",
              padding: "10px 0px",
            }}>
            {title}
          </h3>
          <img
            src={dot}
            role="button"
            style={{ width: "28px", height: "28px" }}
            alt=""
          />
        </div>
        <p
          style={{
            fontWeight: "400",
            fontSize: "19px",
            lineHeight: "134.17%",
            color: "#5C5C5C",
          }}>
          {description}
        </p>
        <div className="row row-cols-2">
          <div className="col d-flex align-items-center">
            <img src={profile} alt="" role="button" />
            <div className="">
            <h3
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "23px",
                marginLeft: "10px",
              }}>
              {name}
            </h3>
            <span className="d-sm-block d-lg-none ms-3">1.4k views</span>
          </div>
          </div>

          <div className="col">
            <div className="d-flex justify-content-end align-items-center">
              <img
                src={eye}
                className="img-fluid d-none d-lg-block"
                style={{ width: "18px", height: "18px", marginRight: "8px" }}
                alt=""
              />
              <span className="d-none d-lg-block">1.4k views</span>
              <img src={share} alt="" className="ms-5" role="button" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticlePosts;
