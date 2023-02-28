import React from 'react';
import './form.css';

const Form = () => (
  <div id="mlb2-3736550" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3736550">
        <div className="ml-form-align-center ">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{}}>
                <h4>Were launching soon!</h4>
                <p>Fill out the form below, and we’ll be sure to invite you when we launch 🚀</p>
              </div>
              <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/344627/forms/81286065627857950/subscribe" data-code method="post" target="_blank">
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ">
                    <div className="ml-field-group ml-field-usage ml-validate-required">
                      <label>What's your use case?</label>
                      <select className="custom-select" name="fields[usage]" aria-label="usage" aria-required="true">
                        <option value>-</option>
                        <option>
                          writing
                        </option>
                        <option>
                          studying
                        </option>
                        <option>
                          programming
                        </option>
                        <option>
                          video editing
                        </option>                   
                      </select>
                    </div>
                  </div><div className="ml-form-fieldRow ">
                    <div className="ml-field-group ml-field-days ml-validate-required">
                      <label>How many unmotivated days do you have?</label>
                      <select className="custom-select" name="fields[days]" aria-label="days" aria-required="true">
                        <option value>-</option>
                        <option>
                          1-2
                        </option>
                        <option>
                          3-5
                        </option>
                        <option>
                          6-10
                        </option>
                        <option>
                          11+
                        </option> 
                      </select>
                    </div>
                  </div><div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask name="fields[email]" placeholder="Email" autoComplete="email" />
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" defaultValue={1} />
                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">Invite Me ✉️</button>
                  <button disabled="disabled" style={{display: 'none'}} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad" />
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>
                <input type="hidden" name="anticsrf" defaultValue="true" />
              </form>
            </div>
            <div className="ml-form-successBody row-success" style={{display: 'none'}}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>We'll let you know the second we launch 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </div>
)
export default Form;
