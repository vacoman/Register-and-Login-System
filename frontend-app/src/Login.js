import React from 'react'
import './login.css';

export default function Login() {
  return (
    <div id='card-form'>
      <h1>Iniciar sesión</h1>
        <form>
          <label for='email' id='label-email'>E-mail</label>
          <div id='input-email'>
            <input type='email' maxLength='30' id='email' name='email' required='true' />
          </div>
          <div id='container-button'>
            <button type='submit' id='button-continue'>Continuar</button>
          </div>
          <div id='text-condition'>
            <p>
            Al continuar, aceptas las <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088'>Condiciones de uso</a> y el <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496'>Aviso de privacidad</a> de Amazon.
            </p>
          </div>
          <div id='help-link'>
            <p><a href='https://www.amazon.com/ap/forgotpassword?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=es&pageId=usflex&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Flog%2Fs%3Fk%3Dlog%2Bin%26ref_%3Dnav_signin&prevRID=0NHZ8EX8FFF0SD3ZSC86&openid.assoc_handle=usflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'>¿Olvidaste tu contraseña?</a></p>
          </div>
        </form>
        <div id='line'> </div>
        <div id='new-account'>
          <h5>¿Compras para el trabajo?</h5>
          <p><a href='https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=es_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&disableLoginPrepopulate=1&ref_=ab_welcome_bw_ap-sn_dsk'>Compra en amazon bussisnes</a></p>
        </div>
    </div>
  )
}
