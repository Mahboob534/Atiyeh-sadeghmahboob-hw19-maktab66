import React, { useContext, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { GetCountary } from "../components/GetCountary";
import { useNavigate, useLocation } from "react-router-dom";
import { InfoContext } from "../context/CountaryInfo";

export default function Countary() {
  let params = useParams();

  let countaryFromParams = GetCountary(params.name);

  const { countariesInfo, setCountariesInfo } = useContext(InfoContext);

  const [countary, setCountry] = useState(countaryFromParams);

  const navigate = useNavigate();

  const handleBorder = (bo) => {
    setCountry(countariesInfo.find((name) => name.alpha3Code == bo));
  };

  return (
    <>
      <div className="countainer">
        <button className="button" onClick={() => navigate(-1)}>
          <FaLongArrowAltLeft /> Back
        </button>
      </div>
      <div className="row">
        <img src={countary.flag} alt={countary.name} />
        <div className="col-2">
          <h2>{countary.name}</h2>
          <div className="grids">
            <p>
              Native Name: <span>{countary.nativeName}</span>
            </p>
            <p>
              Population: <span>{countary.population}</span>
            </p>
            <p>
              Region: <span>{countary.region}</span>
            </p>
            <p>
              Sub Region: <span>{countary.subregion}</span>
            </p>
            <p>
              Capital: <span>{countary.capital}</span>
            </p>

            <p>
              Top Level Domain: <span>{countary.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies:{" "}
              <span>{countary.currencies.map((cur) => cur.name)}</span>
            </p>
            <p>
              Languages:{" "}
              <span>{countary.languages.map((lang) => lang.name + ", ")}</span>
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "16px" }}>
            <p>
              Border Countries:
              <span>
                {countary.borders ? (
                  countary.borders.map((border) => (
                    <button
                      className="button"
                      onClick={() => handleBorder(border)}
                    >
                      {border}
                    </button>
                  ))
                ) : (
                  <label> Not Border</label>
                )}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
