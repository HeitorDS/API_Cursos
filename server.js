const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json()) 

app.get('/',(req, res)=>{
    res.send('API de Cursos')
})
let ti = [
    {id:1, nome: "Tecnico de informática", 
    descricao: 'Profissão especializado em sistemas de informação, capaz de realizar manutenção, instalação, suporte e resolução de problemas técnicos em computadores e redes.'},
    {id:2, nome:"MS Excel-Recursos Avançados",
    descricao:' Profissão permitem que o utilizador desenvolva planilhas mais complexas, utilizando ferramentas como fórmulas complexas, tabelas dinâmicas, macros e validação de dados.'},
    {id:3, nome:"MS Excel-Recursos Básicos",
    descricao:' Profissão manipulação de planilhas, utilização de fórmulas e funções simples, criação de gráficos básicos, formatação de células e planilhas, e utilização de ferramentas para classificar e filtrar dados. '},
    {id:4, nome:"Instalar e configurar componentes de hardware",
    descricao:' Profissão que envolve tanto a instalação física dos componentes dentro do computador como a configuração dos seus parâmetros no sistema operacional, como a BIOS e o Windows.'},
    {id:5,nome:"Segurança de Redes",
    descricao:'Profissão de  conjunto de medidas, políticas, tecnologias e procedimentos implementados para proteger infraestruturas de comunicação contra ataques cibernéticos, acesso não autorizado e perda de dados.'},
]
let gestao=[
    {id:1, nome: "Marketing", 
    descricao: ' Profissão em conjunto de atividades que visam entender as necessidades do mercado, criar produtos ou serviços adequados, promover as ofertas e construir relações duradouras com os clientes.'},
    {id:2,nome:"Assistente de Recursos Humanos",
    descricao:'Profissão que desempenha um papel crucial na gestão de pessoas dentro de uma empresa ou organização.'},
    {id:3,nome:"Tecnico em Logística",
    descricao:'Profissão  responsável por planejar, coordenar e executar as atividades relacionadas ao fluxo de materiais e produtos dentro de uma organização.'},
    {id:4,nome:"Tecnico em Administração",
    descricao:'Profissão que atua em apoio à gestão de empresas, executando tarefas administrativas como organização de arquivos, análise de documentos, controle de estoque e suporte a sistemas de informação.'},
]
let saude=[
    {id:1,nome:"Tecnico em Estética",
    descricao:'Profissão qualificado para realizar procedimentos de beleza e bem-estar, como tratamentos faciais e corporais, massagens, depilação, design de sobrancelhas, cuidados com as unhas e maquiagem. '},
    {id:2,nome:"Cabelereiro",
    descricao:'Profissão que envolve o cuidado com a estética e saúde dos cabelos, realizando cortes, penteados, coloração, hidratação e outros tratamentos'},
    {id:3,nome:"Cuidador de Idoso",
    descricao:'Profissão que fornece assistência física, emocional e social a pessoas idosas que necessitam de ajuda para realizar as atividades diárias e manter a qualidade de vida.'},
    {id:4,nome:"Massagista",
    descricao:'Profissão que aplica massagens para promover relaxamento, alívio de tensões e melhorar a circulação sanguínea.'},
    {id:5, nome:"Atendente de Farmácia",
    descricao:' Profissão que trabalha em farmácias e drogarias, sendo responsável pelo atendimento ao público, venda de medicamentos e produtos de higiene pessoal e cosméticos, além de auxiliar na organização do estabelecimento e controle de estoque.'},
    {id:6, nome: "Tecnico em Enfermagem", 
    descricao: 'profissão de saúde dedicada ao cuidado, promoção, prevenção, tratamento e reabilitação da saúde de indivíduos, famílias e comunidades.'},
]

app.get('/saude',(req,res)=>{
    res.json(saude)
})
app.get('/ti',(req,res)=>{
    res.json(ti)
})
app.get('/gestao',(req,res)=>{
    res.json(gestao)
})

module.exports = app;