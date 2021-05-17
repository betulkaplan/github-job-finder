import React from 'react';
import './jobcard.css';

export default function JobCard({ data }) {
  return (
    <div className="jobcard">
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        {/* <div dangerouslySetInnerHTML={{ __html: `${data.how_to_apply}` }} /> */}
        <div className="row g-0 m-2">
          <div className="col-md-4">
            <img
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              src={data.company_logo}
              alt="LOGO"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.type}</p>
              <a href={data.company_url}>{data.company}</a>
              <p className="card-text">
                <small className="text-muted">{data.location}</small>
              </p>
              <div className="d-flex flex-row justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target=".details"
                >
                  Details
                </button>
                <button type="button" className="btn btn-primary">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal starts */}
      <div
        className="modal fade details"
        // id="details"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {data.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                dangerouslySetInnerHTML={{ __html: `${data.description}` }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
