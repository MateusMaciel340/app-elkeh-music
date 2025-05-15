import { listService, listServiceSpecial } from '../../../../data/service';
import './ServiceStore.css';

function ServiceStore() {

  return (
    <>
      <section className="content__service content__space">
        <h2 className="content__subtitle">Nossos serviços</h2>

        <div className='service__group'>
          {listService.map((service, index) => 
            <div className='service__layer' key={index}>
              <img src={`/assets/service/${service.image}.svg`} alt={`Logo do serviço ${service.title}`}/>
              <h2 className="content__subtitle">{service.title}</h2>
              <p className="content__text">{service.description}</p>
            </div>
          )}
        </div>

        <div className="service__special">
          {listServiceSpecial.map((special, index) =>
            <img src={`assets/service/special/service-${special.id}.png`}/>
          )}
        </div>
      </section>
    </>
  )
}

export default ServiceStore;