import axios from 'axios';

const fetchServicesAnswers = ({
  nomeSAS, mes, token, tipologia, setServices, setLoading, history,
}:any) => {
  axios.get(`http://localhost:9090/devolutivas/${nomeSAS}/${mes}/${token}/${tipologia}`).then((res) => {
    setServices(res.data);
    console.log(res.data);
    setLoading(false);
    if (
      res.data['bagracasexo[fem_branca]'] === ''
      || res.data['ccafluxopessoasatend[6a11m_atendmesatual]'] === ''
      || res.data['ccinteratendfem[75maisf_remmesatual]'] === ''
      || res.data['cdcmatendfxetaria[18a29_atendmesatual]'] === ''
      || res.data['cdiatenfxetariafem[60a64f_atendmesatual]'] === ''
      || res.data['cedesfluxomulheresat[15a17f_atendmesatual]'] === ''
      || res.data['circofluxoatend[6a11m_atendmesatual]'] === ''
      || res.data['cjfluxopessoasatend[15a17m_atendmesatual]'] === ''
      || res.data['crecifluxoatend[atendmesatual_60a64m]'] === ''
      || res.data['mseatend[12a14f_atendpsc]'] === ''
      || res.data['naisatenfxetariafem[0a5f_atendmesatual]'] === ''
      || res.data['ncifluxoconvivencia[60a64m_atendmesatual]'] === ''
      || res.data['ncpopruaatendfem[0a11f_freqpresencial]'] === ''
      || res.data['restafluxopessoasate[15a17f_atendmesatual]'] === ''
      || res.data['sadpifluxopessoas[atendidos_60a64m]'] === ''
      || res.data['sasfinfosnecessarias[famatend]'] === ''
      || res.data['sispatendfem[18a29f]'] === ''
      || res.data['spvvatenfxetaria[0a5f_atendmesatual]'] === ''
    ) {
      history.push('/Blank');
    }
    if (res.data.statusCodeValue === 400) {
      history.push('/Blank');
    }
  }).catch((err) => {
    console.log(err);
    history.push('/Blank');
  });
};

export default fetchServicesAnswers;
